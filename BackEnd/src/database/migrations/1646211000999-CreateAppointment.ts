import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointment1646211000999
  implements MigrationInterface
{
  // eslint-disable-next-line class-methods-use-this
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'provider_id',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp',
          },
        ],
      })
    );
  }

  // eslint-disable-next-line class-methods-use-this
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}
