import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1701712737774 implements MigrationInterface {
    name = 'InitialMigration1701712737774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "phoneNumber" TO "contactNumber"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "contactNumber" TO "phoneNumber"`);
    }

}
