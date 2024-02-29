function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Large shirt with default message
make_shirt();

// Medium shirt with default message
make_shirt("Medium");

// Custom shirt
make_shirt("Small", "Hello, World!");
