export function generateRandomString(length : number) : string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        // Get a random index from the character pool
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars.charAt(randomIndex);
    }
    return result;
}

export function currentDate() : string {
    return new Date().toLocaleDateString("en-GB");
}

export function tomorrowDate() : string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    // Formats automatically based on the user's system locale
    return (tomorrow.toLocaleDateString("en-GB")); 
}