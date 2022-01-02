const objetoA: {
    chaveA: string; 
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;
} = {
    chaveA: "A",
    chaveB: "B",
}

objetoA.chaveA = 'C';