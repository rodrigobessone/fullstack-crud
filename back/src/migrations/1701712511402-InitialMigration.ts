import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1701712511402 implements MigrationInterface {
    name = 'InitialMigration1701712511402'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "phoneNumber" TO "contactNumber"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "contactNumber" TO "phoneNumber"`);
    }

}
