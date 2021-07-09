CREATE TABLE "public"."resources" ("id" serial NOT NULL, "address" text, "contact_name" text NOT NULL, "contact_number" text NOT NULL, "description" text, "resource_type_id" integer NOT NULL, "district_id" integer NOT NULL, "upvote_count" integer, "downvote_count" integer, "verified_at" timestamptz, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id"), FOREIGN KEY ("district_id") REFERENCES "public"."districts"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("resource_type_id") REFERENCES "public"."resources_type"("id") ON UPDATE cascade ON DELETE cascade );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_resources_updated_at"
BEFORE UPDATE ON "public"."resources"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_resources_updated_at" ON "public"."resources" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
