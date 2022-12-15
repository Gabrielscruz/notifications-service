/* eslint-disable prettier/prettier */
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';


describe('find recipients notifications', () => {
  it('should be able to get a recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(notificationsRepository);


    notificationsRepository.create(
        makeNotification({  recipientId: 'recipient-1'})
    )

    notificationsRepository.create(
        makeNotification({  recipientId: 'recipient-2'})
    )

    notificationsRepository.create(
        makeNotification({  recipientId: 'recipient-1'})
    )


    const { notifications } = await getRecipientNotifications.execute({
        recipientId: 'recipient-1',
    })

    expect(notifications).toHaveLength(2)
    expect(notifications).toEqual(
        expect.arrayContaining([
            expect.objectContaining({  recipientId: 'recipient-1'}),
            expect.objectContaining({  recipientId: 'recipient-1'}),
        ])
    )
  
  });
});
