function hitungbmi() {
    let berat = parseFloat(document.getElementById("berat").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
        alert("Masukkan berat dan tinggi badan yang valid.");
        return;
    }

    let bmi = berat / ((tinggi / 100) * (tinggi / 100)); // Tinggi dalam cm diubah ke meter
    document.getElementById("heading").innerHTML = "Berat Badan Kamu:";
    document.getElementById("BMI-output").innerHTML = bmi.toFixed(1);

    let message;
    if (bmi <= 18.5) {
        message = "Kamu kekurangan berat badan";
    } else if (bmi > 18.5 && bmi <= 24.9) {
        message = "Normal (ideal)";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        message = "Kelebihan berat badan";
    } else {
        message = "Kegemukan (obesitas)";
    }
    document.getElementById("message").innerHTML = message;
    }

function resetbmi() {
    document.getElementById("berat").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("usia").value = "";
    document.getElementById("heading").innerHTML = "";
    document.getElementById("BMI-output").innerHTML = "";
    document.getElementById("message").innerHTML = "";
}