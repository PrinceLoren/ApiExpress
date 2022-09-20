import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Wrong Email' })
	email: string;
	@IsString({ message: 'No password specified' })
	password: string;
	@IsString({ message: 'Name not specified' })
	name: string;
}
