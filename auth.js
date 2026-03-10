// auth.js

const supabaseUrl = 'https://yuupbtrljazrrwizzafd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dXBidHJsamF6cnJ3aXp6YWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MjIzMzMsImV4cCI6MjA3NjQ5ODMzM30.trZvyDgPnhenuPiKxChZbVLcBQI3rOm8OsjtgAzoAm0';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// 🔐 Função que protege páginas privadas
async function getUsuarioAtual() {
    const { data: { user }, error } = await supabaseClient.auth.getUser();

    if (error || !user) {
        window.location.href = "index.html"; // volta pro login
        return null;
    }

    return user;
}

// 🚪 Logout real
async function logout() {
    await supabaseClient.auth.signOut();
    window.location.href = "index.html";
}
