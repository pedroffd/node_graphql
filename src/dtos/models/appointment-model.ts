import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class Appointment {
    startsAt: Date;

    @Field()
    endsAt: Date;
}