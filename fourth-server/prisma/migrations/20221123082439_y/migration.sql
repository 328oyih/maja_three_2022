/*
  Warnings:

  - You are about to drop the `Upgrade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `cookiesonclick` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `count` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `passive` on the `User` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Upgrade";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Clicker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" INTEGER NOT NULL,
    "passive" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "cookiesonclick" INTEGER NOT NULL,
    CONSTRAINT "Clicker_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Upgrades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "level" INTEGER NOT NULL DEFAULT 1,
    "clickerId" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    CONSTRAINT "Upgrades_clickerId_fkey" FOREIGN KEY ("clickerId") REFERENCES "Clicker" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_User" ("hash", "id", "password", "salt", "username") SELECT "hash", "id", "password", "salt", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Clicker_authorId_key" ON "Clicker"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "Upgrades_clickerId_key" ON "Upgrades"("clickerId");
