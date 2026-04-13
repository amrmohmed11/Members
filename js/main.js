function copyToClipboard(text, event) {
  // منع انتشار الحدث إذا لزم الأمر
  if (event) event.stopPropagation();

  // استخدام واجهة clipboard الحديثة
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showToastMessage();
      })
      .catch((err) => {
        console.warn("فشل النسخ: ", err);
        fallbackCopy(text);
      });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  showToastMessage();
}

function showToastMessage() {
  const toastEl = document.getElementById("copyToast");
  if (!toastEl) return;
  toastEl.style.opacity = "1";
  setTimeout(() => {
    toastEl.style.opacity = "0";
  }, 1500);
}

// إضافة تأثير بسيط على الصفوف عند التحميل (يمكن إضافته لجمالية اكثر)
document.addEventListener("DOMContentLoaded", function () {
  // تحسين عرض الجدول وجعل جميع الصفوف متسقة
  const rows = document.querySelectorAll(".modern-table tbody tr");
  rows.forEach((row, idx) => {
    row.style.animationDelay = `${idx * 0.05}s`;
    row.style.animation = "fadeSlide 0.3s ease-out forwards";
    row.style.opacity = "0";
  });
  // إزالة الـ opacity بعد الأنيميشن
  setTimeout(() => {
    rows.forEach((row) => {
      row.style.animation = "";
      row.style.opacity = "1";
    });
  }, 400);
});
