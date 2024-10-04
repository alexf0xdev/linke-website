-- DropForeignKey
ALTER TABLE "Button" DROP CONSTRAINT "Button_pageId_fkey";

-- DropForeignKey
ALTER TABLE "Page" DROP CONSTRAINT "Page_userId_fkey";

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Button" ADD CONSTRAINT "Button_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;
