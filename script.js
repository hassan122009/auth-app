const client = new Appwrite.Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6854cf59002de4547daa'); // Project ID

const account = new Appwrite.Account(client);

function toggle(mode) {
  document.getElementById('login_box').style.display = (mode === 'login') ? 'block' : 'none';
  document.getElementById('signup_box').style.display = (mode === 'signup') ? 'block' : 'none';
}

function signup() {
  const email = document.getElementById('signup_email').value;
  const password = document.getElementById('signup_password').value;

  account.create('unique()', email, password)
    .then(() => alert("✅ تم إنشاء الحساب بنجاح"))
    .catch(error => alert("❌ " + error.message));
}

function login() {
  const email = document.getElementById('login_email').value;
  const password = document.getElementById('login_password').value;

  account.createEmailSession(email, password)
    .then(() => alert("✅ تم تسجيل الدخول بنجاح"))
    .catch(error => alert("❌ " + error.message));
}
