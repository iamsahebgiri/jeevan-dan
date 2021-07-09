seed:
	hasura seed apply

drop:
	hasura migrate apply --down all

migrate:
	hasura migrate apply

seedSerially:
	hasura seed apply --file 1624779526709_seed_states.sql
	hasura seed apply --file 1624781689044_seed_districts.sql
	hasura seed apply --file 1624805437621_seed_resources_type.sql
	hasura seed apply --file 1625029949290_seed_resources_ambulance.sql
	hasura seed apply --file 1625030199560_seed_resources_blood.sql
	hasura seed apply --file 1625031552908_seed_resources_food.sql
	hasura seed apply --file 1625032513225_seed_resources_home_care.sql
	hasura seed apply --file 1625032775634_seed_resources_hospital_beds.sql
	hasura seed apply --file 1625041176459_seed_resources_hospital.sql
	hasura seed apply --file 1625041259073_seed_resources_medicines.sql
	hasura seed apply --file 1625041369139_seed_resources_others.sql