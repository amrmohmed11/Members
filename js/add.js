(function () {
  // التأكد من وجود العناصر
  const form = document.getElementById("mainForm");
  const feedbackDiv = document.getElementById("formFeedback");

  // مراجع للحقول الثلاثة (لقراءة القيم)
  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  // وظيفة لعرض رسالة نجاح مع البيانات المُدخلة
  function showSuccessMessage(name, email, phone) {
    // تنسيق الرسالة بشكل جميل (يدعم العربية)
    feedbackDiv.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <span style="font-weight: bold;">✅ تم إرسال النموذج بنجاح!</span>
                    <div style="background: #ffffffaa; border-radius: 16px; padding: 10px; margin-top: 4px; text-align: right;">
                        <span>👤 <strong>الاسم:</strong> ${escapeHtml(name)}</span><br>
                        <span>📧 <strong>البريد:</strong> ${escapeHtml(email)}</span><br>
                        <span>📞 <strong>الهاتف:</strong> ${escapeHtml(phone)}</span>
                    </div>
                    <span style="font-size: 0.8rem; opacity: 0.8;">✨ شكراً لتعبئة النموذج ✨</span>
                </div>
            `;
    feedbackDiv.classList.add("feedback-success");
    // إزالة التأكيد بعد 5 ثواني مع الاحتفاظ برسالة جديدة (اختياري)
    setTimeout(() => {
      if (feedbackDiv.classList.contains("feedback-success")) {
        // لا نمسح المحتوى بل نعيد التلميح الهادئ ولكن نحتفظ بالرسالة
        // فقط نزيل الخلفية الخاصة بعد فترة طويلة؟ أفضل الاحتفاظ بها، ولكن نضيف تأثير بسيط
        // لكن لا داعي لإزالة المحتوى; فقط نتركه.
      }
    }, 4000);
  }

  // دالة بسيطة لمنع XSS
  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/[&<>]/g, function (m) {
        if (m === "&") return "&amp;";
        if (m === "<") return "&lt;";
        if (m === ">") return "&gt;";
        return m;
      })
      .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function (c) {
        return c;
      });
  }

  // معالجة حدث submit
  form.addEventListener("submit", function (event) {
    // الحصول على القيم وتنظيفها من المسافات البادئة/الزائدة
    let fullName = fullNameInput.value.trim();
    let email = emailInput.value.trim();
    let phone = phoneInput.value.trim();

    // التحقق الإضافي (لضمان أن الحقول ليست فارغة، لكن required attribute يقوم بذلك بالفعل)
    // مع ذلك، نتحقق يدويًا لضمان عدم وجود فراغات خادعة
    if (fullName === "" || email === "" || phone === "") {
      // في حال تخطى المتصفح التحقق بسبب ظروف نادرة، نعرض رسالة
      feedbackDiv.innerHTML =
        "⚠️ الرجاء تعبئة جميع الحقول الثلاثة قبل الإرسال ⚠️";
      feedbackDiv.classList.remove("feedback-success");
      feedbackDiv.style.background = "#fff0f0";
      feedbackDiv.style.borderRightColor = "#e63946";
      event.preventDefault(); // نمنع الإرسال
      return false;
    }

    // تحقق بسيط من صيغة البريد الإلكتروني (إضافي)
    const emailPattern = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!emailPattern.test(email)) {
      feedbackDiv.innerHTML =
        "📧 البريد الإلكتروني غير صالح. مثال: name@domain.com";
      feedbackDiv.classList.remove("feedback-success");
      feedbackDiv.style.background = "#fff0f0";
      feedbackDiv.style.borderRightColor = "#e63946";
      event.preventDefault();
      return false;
    }

    // تحقق بسيط من رقم الهاتف: على الأقل 9 أرقام (اختياري لكن مفيد)
    const phoneClean = phone.replace(/[+\-\s\(\)]/g, "");
    if (
      phoneClean.length < 11 ||
      !/^[\d+]+$/.test(phoneClean.replace(/\+/g, ""))
    ) {
      feedbackDiv.innerHTML =
        "📞 رقم الهاتف يجب أن يحتوي على أرقام صالحة (على الأقل 11 أرقام).";
      feedbackDiv.classList.remove("feedback-success");
      feedbackDiv.style.background = "#fff0f0";
      feedbackDiv.style.borderRightColor = "#e63946";
      event.preventDefault();
      return false;
    }

    // --- إذا وصلنا إلى هنا: جميع المدخلات صحيحة ---
    // منع الإرسال الفعلي (حتى لا يعيد تحميل الصفحة أو يرسل إلى الخادم)
    event.preventDefault();

    // عرض رسالة النجاح مع البيانات
    showSuccessMessage(fullName, email, phone);
    // إعادة تعيين لون الخلفية إلى الوضع الطبيعي
    feedbackDiv.style.background = "";
    feedbackDiv.style.borderRightColor = "";

    // (اختياري) يمكن إعادة تعيين النموذج إذا أردت، لكن الأفضل ترك البيانات للمستخدم
    // يمكن إضافة خيار مسح الحقول بعد نجاح الإرسال؟ لا داعي للحفاظ على التجربة.
    // ولكن حسب الرغبة: نضيف تأثير تمرير لطيف.

    // اختياري: تمرير إلى رسالة النجاح لتكون مرئية
    feedbackDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // يمكن إضافة تأثير اهتزاز بسيط للنموذج لزيادة التفاعل؟ لا داعي.
  });

  // إعادة تعيين الرسالة عند الكتابة في أي حقل (تجربة محسنة)
  const allInputs = [fullNameInput, emailInput, phoneInput];
  allInputs.forEach((input) => {
    input.addEventListener("input", function () {
      // إذا كان المستخدم يعدل البيانات، نعيد الرسالة الافتراضية (اختياري ولكن محبب)
      if (feedbackDiv.classList.contains("feedback-success")) {
        feedbackDiv.classList.remove("feedback-success");
      }
      feedbackDiv.innerHTML =
        "✏️ جارٍ تعديل البيانات ... سيتم تحديث الملخص بعد الإرسال";
      feedbackDiv.style.background = "#f0f9ff";
      feedbackDiv.style.borderRightColor = "#3a86ff";
    });
  });
})();
