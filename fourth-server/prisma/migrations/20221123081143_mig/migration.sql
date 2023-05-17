-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "passive" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "cookiesonclick" INTEGER NOT NULL,
    "salt" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Upgrade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "level" INTEGER NOT NULL DEFAULT 1,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Upgrade_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
