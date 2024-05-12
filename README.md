# DeMask

## Create an AWS PostgreSQL database

- Sign into the AWS console.
- Search RDS, click databases left panel and click create database.
- Keep standard create, option postgresQL, latest version, select free tier, enter db instance identifier, master password, storage default, connectivity default, public access yes, vpc firewall default, port 5432, password authentication, 12 months free. keep an eye on account usage. CREATE DB

## Connect to pgAdmin

- launch pgAdmin, navigate to 'Object' menu, select 'Create' and choose 'Server Group' from the dropdown.
- In popup assign server group, give it a name, and it appears in the left menu.
- Right click server group, select refresh. Then right click again select 'Server' and in the next popup input AWS data.
- In Connection tab, Host name: URL string , port: 5432, maintenance db: postgres, master username, and password - try to connect.
- You will likely need to update security group on the AWS console.

## Update security group AWS

- log into the console. select RDS, select relevant db from list.
- Select the link in Security under VPC security groups.
- Select current security group, select inbound rules tab, edit inbound rules. delete existing rule.
- Add rule, in type : select PostgreSQL, Source: custom.
- google my ip address, copy and enter in next box with /32
- you could select anywhere but this is less secure. there is also a my IP option. SAVE
- try to connect again.
- get a PostgreSQL db up and running on AWS
- connect to the db
- write a table & destroy the table

Why choose PostgreSQL?
Why AWS?

| REST API | SQL    |
| -------- | ------ |
| Create   | INSERT |
| Read     | SELECT |
| Update   | UPDATE |
| Delete   | DELETE |
