async function seed() {
  console.log("Seed placeholder: add Prisma create calls using mock data.");
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
