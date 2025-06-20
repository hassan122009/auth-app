// ملف JavaScript
const client = new Appwrite.Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6854c0e4000d416bf7ad');

const account = new Appwrite.Account(client);

function signup() {
  const email = document.getElementById('signup_email').value;
  const password = document.getElementById('signup_password').value;

  account.create('unique()', email, password)
    .then(() => alert('✅ تم إنشاء الحساب بنجاح'))
    .catch(err => alert('❌ ' + err.message));
}

function login() {
  const email = document.getElementById('login_email').value;
  const password = document.getElementById('login_password').value;

  account.createEmailSession(email, password)
    .then(() => {
      alert('✅ تم تسجيل الدخول بنجاح');
      account.get().then(user => console.log("مرحبا", user));
    })
    .catch(err => alert('❌ ' + err.message));
}
