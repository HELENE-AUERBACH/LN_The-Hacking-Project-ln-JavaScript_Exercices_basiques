const ARNToAminoAcidsStr = function(ARN) {
  let AminoAcidsStr = "";
  for (let start = 0; start < ARN.length; start += 3) {
    let subStr = ARN.slice(start, start  + 3);
    switch (subStr) {
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
      case "AGU":
      case "AGC":
        AminoAcidsStr += "Sérine";
        break;
      case "CCU":
      case "CCC":
      case "CCA":
      case "CCG":
        AminoAcidsStr += "Proline";
        break;
      case "UUA":
      case "UUG":
        AminoAcidsStr += "Leucine";
        break;
      case "UUU":
      case "UUC":
        AminoAcidsStr += "Phénylalanine";
        break;
      case "CGU":
      case "CGC":
      case "CGA":
      case "CGG":
      case "AGA":
      case "AGG":
        AminoAcidsStr += "Arginine";
        break;
      case "UAU":
      case "UAC":
        AminoAcidsStr += "Tyrosine";
        break;
    }
    if (start  + 3 < ARN.length) {
      AminoAcidsStr += "-";
    }
  }
  return AminoAcidsStr;
}
console.log("ARN \"UUACGCAGUAGA\" into Amino Acids :");
console.log(ARNToAminoAcidsStr("UUACGCAGUAGA"));
console.log("ARN \"CCGUCGUUGCGCUACAGC\" into Amino Acids :");
console.log(ARNToAminoAcidsStr("CCGUCGUUGCGCUACAGC"));
console.log("ARN \"CCUCGCCGGUACUUCUCG\" into Amino Acids :");
console.log(ARNToAminoAcidsStr("CCUCGCCGGUACUUCUCG"));
