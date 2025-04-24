
export async function GetContacts() {
    try {
        console.log(process.env.FAKE_URL)
        const response = await fetch(`http://localhost:3100/last-chats`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching Contact:', error);
        throw error;
    }
}