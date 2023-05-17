/*
  Warnings:

  - You are about to alter the column `count` on the `Clicker` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Clicker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" INTEGER NOT NULL,
    "passive" INTEGER NOT NULL,
    "count" REAL NOT NULL,
    "cookiesonclick" INTEGER NOT NULL,
    "totalclicks" INTEGER,
    CONSTRAINT "Clicker_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Clicker" ("authorId", "cookiesonclick", "count", "id", "passive", "totalclicks") SELECT "authorId", "cookiesonclick", "count", "id", "passive", "totalclicks" FROM "Clicker";
DROP TABLE "Clicker";
ALTER TABLE "new_Clicker" RENAME TO "Clicker";
CREATE UNIQUE INDEX "Clicker_authorId_key" ON "Clicker"("authorId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
