#include <iostream>

int main(int argc, char* argv[]) {
if (argc != 2) {
    std::cerr << "Uso: " << argv[0] << " <DNI>" << std::endl;
    return 1;
}

std::string dni = argv[1];
// Aquí realizarías el cálculo con el DNI
std::string resultado = "Resultado del cálculo: " + dni;

std::cout << resultado << std::endl;
return 0;
}