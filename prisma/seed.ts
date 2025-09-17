
import { PrismaClient, Priority, Status, Label } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // 1. Clear existing data
  await prisma.task.deleteMany();
  console.log('Cleared existing tasks.');

  // 2. Get a list of statuses, priorities, and labels
  const statuses = Object.values(Status);
  const priorities = Object.values(Priority);
  const labels = Object.values(Label);

  const taskCount = 100;
  const tasks = [];

  // 3. Generate tasks
  for (let i = 0; i < taskCount; i++) {
    tasks.push({
      code: `TASK-${String(i + 1).padStart(3, '0')}`,
      title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
      status: statuses[Math.floor(Math.random() * statuses.length)],
      priority: priorities[Math.floor(Math.random() * priorities.length)],
      label: labels[Math.floor(Math.random() * labels.length)],
    });
  }

  // 4. Insert tasks into the database
  await prisma.task.createMany({
    data: tasks,
  });

  console.log(`Successfully seeded ${taskCount} tasks.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
