/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.notification.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.video.deleteMany();
  await prisma.workspaceUser.deleteMany();
  await prisma.workspace.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();

  // Create Users
  const users = [];
  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.name.fullName(),
        image: faker.image.avatar(),
        accounts: {
          create: [
            {
              type: "oauth",
              provider: faker.helpers.arrayElement([
                "google",
                "discord",
                "linkedin",
                "slack",
                "github",
              ]),
              providerAccountId: faker.datatype.uuid(),
              access_token: faker.internet.password(),
            },
          ],
        },
        sessions: {
          create: [
            {
              sessionToken: faker.datatype.uuid(),
              expires: faker.date.future(),
            },
          ],
        },
      },
    });
    users.push(user);
  }

  // Create Workspaces
  const workspaces = [];
  for (let i = 0; i < 5; i++) {
    const workspace = await prisma.workspace.create({
      data: {
        name: faker.company.name(),
        inviteEmails: [faker.internet.email(), faker.internet.email()],
        users: {
          create: [
            {
              // @ts-ignore
              userId:
                users[faker.number.int({ min: 0, max: users.length - 1 })]?.id,
              role: faker.helpers.arrayElement(["admin", "member"]),
            },
          ],
        },
      },
    });
    workspaces.push(workspace);
  }

  // Create Videos
  const videos = [];
  for (let i = 0; i < 20; i++) {
    const video = await prisma.video.create({
      // @ts-ignore
      data: {
        title: faker.lorem.words(5),
        description: faker.lorem.sentences(2),
        url: faker.internet.url(),
        userId: users[faker.number.int({ min: 0, max: users.length - 1 })]?.id,
        workspaceId:
          workspaces[faker.number.int({ min: 0, max: workspaces.length - 1 })]
            ?.id,
      },
    });
    videos.push(video);
  }

  // Create Comments
  for (let i = 0; i < 30; i++) {
    await prisma.comment.create({
      // @ts-ignore
      data: {
        text: faker.lorem.sentences(2),
        userId: users[faker.number.int({ min: 0, max: users.length - 1 })]?.id,
        videoId:
          videos[faker.number.int({ min: 0, max: videos.length - 1 })]?.id,
      },
    });
  }

  // Create Notifications
  for (let i = 0; i < 15; i++) {
    await prisma.notification.create({
      // @ts-ignore
      data: {
        text: faker.lorem.sentences(2),
        userId: users[faker.number.int({ min: 0, max: users.length - 1 })]?.id,
        videoId:
          videos[faker.number.int({ min: 0, max: videos.length - 1 })]?.id,
        read: faker.datatype.boolean(),
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });
