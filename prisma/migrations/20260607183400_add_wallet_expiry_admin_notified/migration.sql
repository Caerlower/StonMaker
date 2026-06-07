-- AlterTable
ALTER TABLE "Group" ADD COLUMN IF NOT EXISTS "adminNotified" BOOLEAN;

-- AlterTable
ALTER TABLE "GroupMember" ADD COLUMN IF NOT EXISTS "tonWallet" TEXT;

-- AlterTable
ALTER TABLE "Proposal" ADD COLUMN IF NOT EXISTS "expiresAt" TIMESTAMP(3);
