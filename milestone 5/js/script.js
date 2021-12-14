Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            activeContactIndex: 0,
            userNewMessage: '',
            searchBarText: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            dropDown: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            dropDown: ''
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            dropDown: ''
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            dropDown: ''
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            dropDown: ''
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            dropDown: ''
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            dropDown: ''
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            dropDown: ''
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            dropDown: ''
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dropDown: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            dropDown: ''
                        }
                    ],
                },
            ]
            
        },
        methods: {
            changeActiveContact: function(index) {
                this.activeContactIndex = index;
            },
            isActive: function(index) {
                if (this.activeContactIndex === index) {
                    return true;
                };
            },
            isSent: function(index) {
                if (this.contacts[this.activeContactIndex].messages[index].status === 'sent') {
                    return true;
                };
            },
            isReceived: function(index) {
                if (this.contacts[this.activeContactIndex].messages[index].status === 'received') {
                    return true;
                };
            },
            sendMessage: function() {
                this.contacts[this.activeContactIndex].messages.push(
                    {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: this.userNewMessage,
                        status: 'sent',
                        dropDown: '',
                    },
                );
                this.userNewMessage = '';
                setTimeout( () => {
                    this.contacts[this.activeContactIndex].messages.push(
                        {
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            text: 'ok',
                            status: 'received',
                            dropDown: '',
                        },
                    );
                }, 1000 );
            },
            searchContact: function() {
                this.contacts.forEach(element => {
                    if (!element.name.toLowerCase().includes(this.searchBarText.toLowerCase())) {
                        element.visible = false;
                    } else {
                        element.visible = true;
                    };   
                });
            },
            toggleDropDown: function(index) {
                let message = this.contacts[this.activeContactIndex].messages[index];

                if (message.dropDown === '') {
                    message.dropDown = 'active';
                } else {
                    message.dropDown = '';
                }
            },
            deleteMessage: function(index) {
                this.contacts[this.activeContactIndex].messages.splice(index, 1);
            }
        },
    }
);