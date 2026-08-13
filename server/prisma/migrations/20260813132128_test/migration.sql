-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "transactions" ALTER COLUMN "user_id" DROP NOT NULL,
ALTER COLUMN "category_id" DROP NOT NULL;
