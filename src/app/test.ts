export function displayDriverLicense(licenseState: string | undefined, licenseNumber: string | undefined) {
	// const state = licenseState ?? '';
	// const number = licenseNumber ?? '';
	// return state || number || '-';
	// return licenseState ?? ('' + (licenseNumber ? ' ' + licenseNumber : '') || '-');
	return licenseState || licenseNumber ? [licenseState, licenseNumber].filter((v) => v).join(' ') : '-';
}
