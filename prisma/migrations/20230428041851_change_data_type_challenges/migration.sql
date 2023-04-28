/*
  Warnings:

  - You are about to alter the column `challengesCompleted` on the `User` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `currentExperience` on the `User` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `level` on the `User` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "level" INTEGER,
    "currentExperience" INTEGER,
    "challengesCompleted" INTEGER
);
INSERT INTO "new_User" ("challengesCompleted", "currentExperience", "email", "emailVerified", "id", "image", "level", "name") SELECT "challengesCompleted", "currentExperience", "email", "emailVerified", "id", "image", "level", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
