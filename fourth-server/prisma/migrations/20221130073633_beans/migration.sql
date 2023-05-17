-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Clicker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" INTEGER NOT NULL,
    "passive" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "cookiesonclick" INTEGER NOT NULL,
    "totalclicks" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Clicker_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Clicker" ("authorId", "cookiesonclick", "count", "id", "passive") SELECT "authorId", "cookiesonclick", "count", "id", "passive" FROM "Clicker";
DROP TABLE "Clicker";
ALTER TABLE "new_Clicker" RENAME TO "Clicker";
CREATE UNIQUE INDEX "Clicker_authorId_key" ON "Clicker"("authorId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
