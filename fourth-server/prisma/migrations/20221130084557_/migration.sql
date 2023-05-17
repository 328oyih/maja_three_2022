/*
  Warnings:

  - You are about to alter the column `cost` on the `Upgrades` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `level` on the `Upgrades` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `cookiesonclick` on the `Clicker` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `passive` on the `Clicker` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `totalclicks` on the `Clicker` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Upgrades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "level" REAL NOT NULL DEFAULT 1,
    "clickerId" INTEGER NOT NULL,
    "cost" REAL NOT NULL,
    CONSTRAINT "Upgrades_clickerId_fkey" FOREIGN KEY ("clickerId") REFERENCES "Clicker" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Upgrades" ("clickerId", "cost", "id", "level") SELECT "clickerId", "cost", "id", "level" FROM "Upgrades";
DROP TABLE "Upgrades";
ALTER TABLE "new_Upgrades" RENAME TO "Upgrades";
CREATE UNIQUE INDEX "Upgrades_clickerId_key" ON "Upgrades"("clickerId");
CREATE TABLE "new_Clicker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" INTEGER NOT NULL,
    "passive" REAL NOT NULL,
    "count" REAL NOT NULL,
    "cookiesonclick" REAL NOT NULL,
    "totalclicks" REAL,
    CONSTRAINT "Clicker_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Clicker" ("authorId", "cookiesonclick", "count", "id", "passive", "totalclicks") SELECT "authorId", "cookiesonclick", "count", "id", "passive", "totalclicks" FROM "Clicker";
DROP TABLE "Clicker";
ALTER TABLE "new_Clicker" RENAME TO "Clicker";
CREATE UNIQUE INDEX "Clicker_authorId_key" ON "Clicker"("authorId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
