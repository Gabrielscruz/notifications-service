/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/notification";
import { NotificationRepository } from "../repositories/notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface GetRecipientNotificationsRequest {
    recipientId: string;
}

interface GetRecipientNotificationsResponse {
    notifications: Notification[]
}
@Injectable()
export class GetRecipientNotifications {
    constructor(private notificationRepository: NotificationRepository) {}
    async execute(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse> {
        const { recipientId } = request;

 

        const notifications = await this.notificationRepository.findManyByRecipientId(
            recipientId
        );

        return {
            notifications,
        }
    }
}