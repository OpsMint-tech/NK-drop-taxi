async function test() {
    try {
        const res = await fetch('http://localhost:8080/api/v1/book-now', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                vehicleType: 'SUV',
                fullName: 'Test'
            })
        });
        const text = await res.text();
        console.log("Status:", res.status);
        console.log("Body:", text);
    } catch (e) {
        console.error("Fetch failed:", e);
    }
}
test();
