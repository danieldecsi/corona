import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm'

@Entity()
export class Location {
  @PrimaryColumn('uuid')
  public id: string

  @Column('text', {
    nullable: false,
  })
  public deviceId: string

  @Column('text', {
    nullable: false,
  })
  public location: string

  @Column('timestamp without time zone', {
    nullable: false,
  })
  public recordedAt: Date

  @CreateDateColumn({
    nullable: false,
  })
  public createdAt: string
}
