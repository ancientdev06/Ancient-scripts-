async function sendMessage() {
    const name = "User"; // Replace with dynamic username if needed
    const text = document.getElementById("message").value.trim();
    if (!text) return;

    let { error } = await supabase.from("messages").insert([{ name, text }]);

    if (error) {
        console.error("Error sending message:", error);
        alert("Error: " + error.message);
    } else {
        console.log("Message sent successfully!");
    }

    document.getElementById("message").value = "";
}
