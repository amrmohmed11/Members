<!doctype html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>members</title>
    <!-- add google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap" rel="stylesheet" />
    <!-- add bootstrap links -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <!-- adds Font Awesome 6 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <link rel="stylesheet" href="css/main.css" />
</head>

<body>
    <div class="copy-toast-msg" id="copyToast">📋 تم نسخ القيمة!</div>
    <div class="container p-0 d-flex justify-content-center align-items-center" style="position: relative; z-index: 2">
        <div class="glass-card">
            <!-- header section with elegant style -->
            <div class="table-header">
                <div class="header-title">
                    <div class="title-text">
                        <h1>
                            <i class="fas fa-users-between" style="margin-left: 12px"></i>
                            بيانات المستخدمين
                        </h1>
                    </div>
                </div>
            </div>
            <!-- responsive table area -->
            <div class="table-responsive-custom">
                <table class="modern-table" style="width: 100%">
                    <thead>
                        <tr>
                            <th><i class="fas fa-user-circle"></i> الاسم</th>
                            <th><i class="fas fa-id-card"></i> رقم التسجيل</th>
                            <th><i class="fas fa-lock"></i> الرقم السري</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- الصف الأول (محمد احمد محمود احمد) -->
                        <tr>
                            <td>
                                <div class="user-name">محمد احمد محمود احمد</div>
                            </td>
                            <td>
                                <span class="user-id"> 123456789 </span>
                            </td>
                            <td>
                                <div class="password-wrapper">
                                    <span class="password-value" id="pass1">Aa123456@</span>
                                    <button class="copy-btn" onclick="copyToClipboard('Aa123456@', event)"
                                        aria-label="نسخ كلمة المرور">
                                        <i class="far fa-copy"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <!-- الصف الثاني (محمد احمد محمود احمد - مكرر كما في التصميم الأصلي) -->
                        <tr>
                            <td>
                                <div class="user-name">محمد احمد محمود احمد</div>
                            </td>
                            <td>
                                <span class="user-id"> 123456789 </span>
                            </td>
                            <td>
                                <div class="password-wrapper">
                                    <span class="password-value" id="pass2">Aa123456@</span>
                                    <button class="copy-btn" onclick="copyToClipboard('Aa123456@', event)"
                                        aria-label="نسخ كلمة المرور">
                                        <i class="far fa-copy"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <a class="add-m" href="pages/add.html">
        <i class="fa-solid fa-plus"></i>
        <p>اضافت ممول</p>
    </a>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous">
    </script>
    <script src="js/main.js"></script>
</body>

</html>