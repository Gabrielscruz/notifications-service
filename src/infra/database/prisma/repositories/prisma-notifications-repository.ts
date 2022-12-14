/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../application/entities/notification";
import { NotificationRepository } from "../../../../application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
    constructor (private prismaSevice: PrismaService) {}

    async create(notification: Notification): Promise<void> {
        await this.prismaSevice.notification.create({
            data: {
                id: notification.id,
                recipientId: notification.recipientId,
                content: notification.content.value,
                category: notification.category,
                readAt: notification.readAt,
                createdAt: notification.createdAt
            }
        })
    }
}
