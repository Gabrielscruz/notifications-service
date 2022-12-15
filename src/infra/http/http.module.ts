/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { SendNotification } from '@application/use-cases/send-notification';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnReadNotification } from '@application/use-cases/unread-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';

import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [ 
        SendNotification, 
        CancelNotification, 
        ReadNotification, 
        UnReadNotification, 
        CountRecipientNotifications, 
        GetRecipientNotifications
    ]
})

export class HttpModule {}