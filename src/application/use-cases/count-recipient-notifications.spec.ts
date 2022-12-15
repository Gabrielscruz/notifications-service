/* eslint-disable prettier/prettier */
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';


describe('Count recipients notifications', () => {
  it('should be able to count a recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);


    notificationsRepository.create(
        makeNotification({  recipientId: 'recipient-1'})
    )

    notificationsRepository.create(
        makeNotification({  recipientId: 'recipient-2'})
    )

    notificationsRepository.create(
        makeNotification({  recipientId: 'recipient-1'})
    )


    const { count } = await countRecipientNotifications.execute({
        recipientId: 'recipient-1',
    })

    expect(count).toEqual(2);
  
  });
});