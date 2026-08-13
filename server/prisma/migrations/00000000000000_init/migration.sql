-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "transaction_type" AS ENUM ('income', 'expense');

-- CreateTable
CREATE TABLE "budget" (
    "id" UUID NOT NULL,
    "month" SMALLINT,
    "year" SMALLINT,
    "amount" BIGINT,
    "user_id" UUID,

    CONSTRAINT "budget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "type" VARCHAR(20) NOT NULL,
    "color" VARCHAR(30) NOT NULL,
    "icon" VARCHAR(100) NOT NULL,
    "create_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "user_id" UUID NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" UUID NOT NULL,
    "amount" BIGINT,
    "note" TEXT,
    "date" DATE,
    "type" "transaction_type" NOT NULL,
    "create_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "user_id" UUID NOT NULL,
    "category_id" UUID NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(125),
    "password" VARCHAR(255) NOT NULL,
    "create_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "budget" ADD CONSTRAINT "fk_budget_user" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "fk_categories_user" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "fk_transaction_category" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "fk_transaction_user" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
