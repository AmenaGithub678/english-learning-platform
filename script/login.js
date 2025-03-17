document.addEventListener("DOMContentLoaded", function () {
    // Initially hide vocabulary and FAQ sections
    document.getElementById("navbar").style.opacity = "0";
    document.getElementById("navbar").style.visibility = "hidden";
   
    document.getElementById("learn").style.display = "none";
    document.getElementById("faq").style.display = "none";
   

    document.getElementById("details").style.display = "none";
  

    document.getElementById("login-btn").addEventListener("click", function (event) {
        event.preventDefault();

        const user = document.getElementById("user").value;
        const pin = document.getElementById("pin").value;

        if (pin === "123456") {
            
            document.getElementById("banner-sec").style.display = "none";

            document.getElementById("navbar").style.opacity = "1";
            document.getElementById("navbar").style.visibility = "visible";
        
            document.getElementById("learn").style.display = "block";
            document.getElementById("faq").style.display = "block";
            document.getElementById("details").style.display = "block";

            Swal.fire({
                icon: "success",
                title: "সাফল্য!",
                text: "আপনি সফলভাবে লগইন করেছেন।",
                confirmButtonText: "ঠিক আছে",
            });

        } else {
            // Show error alert
            Swal.fire({
                icon: "error",
                title: "ভুল পাসওয়ার্ড!",
                text: "দয়া করে আবার চেষ্টা করুন।",
                confirmButtonText: "ঠিক আছে",
            });
        };

    });
});



document.getElementById("logoutBtn").addEventListener("click", function () {
    document.getElementById("learn").style.display = "none";
    document.getElementById("faq").style.display = "none";
    document.getElementById("details").style.display = "none"; 
    document.getElementById("navbar").style.display = "none";
    document.getElementById("banner-sec").style.display="block";
   
});





