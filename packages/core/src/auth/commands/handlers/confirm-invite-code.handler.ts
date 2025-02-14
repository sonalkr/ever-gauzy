import { UnauthorizedException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ConfirmInviteCodeCommand } from '../confirm-invite-code.command';
import { AuthService } from '../../auth.service';

@CommandHandler(ConfirmInviteCodeCommand)
export class ConfirmInviteCodeHandler implements ICommandHandler<ConfirmInviteCodeCommand> {

	constructor(
		private readonly authService: AuthService
	) {}

	public async execute(command: ConfirmInviteCodeCommand): Promise<any> {
		try {
			const { input } = command;
			return await this.authService.confirmInviteCode(input);
		} catch (error) {
			throw new UnauthorizedException();
		}
	}
}
