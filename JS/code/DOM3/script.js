// let c = 0;
// const mainDiv= document.getElementById('box')
// function createPara ()
// {
//     c++;
//     const para = document.createElement('p') //<p></p>
//     para.textContent = "count: " + c;//<p>count:1</p>
//     mainDiv.appendChild(para)//<div id="box><p>count:1</p></div>"
// }


const movies = [
	{
		id: 1,
		movieName: "SQUID GAME",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcK4G8grIUGuYzhNoqEkWzQ71VGTpXq3cJwkAC3pcrKrzrVmzKz2n7iEzmexOz6iF2ZuHpN0OwvEIZwt6KX_cFyTc15c1ZVlTqAQGXHGk9zg0AXMPXhuUqo8v-s1Icj6dDjn_1yWkeyufk_K4X-i_1K9xM8M1NPFCCIlhZdtZH9WitTjPi1XjnahSj7gqA9yDD4eucnrf6zAwIQ71W2wSKpy91XBK-QlfHToOy_c3T0UssjLqSHuiGE7-giOm4BNg0WN3EYm-tUbMLEjfs57nyVx7OnLZQ-M8zLSzWP5O-YiV2puQAPNT0aSj93S9cvbX9Zoos7mqRNw7ew1maEIacGvDqgmZVPDA_HiikIf4rs7bQ.jpg?r=ea2",
	},
	{
		id: 2,
		movieName: "Money Heist",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326",
	},
	{
		id: 3,
		movieName: "misMatched",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS0odT1XnaAzSLRCSC4cqkP9lppCZXXAr3sqwJ-nz84Eg-EuBj-_KEGTFLdLrj9wb0qmrQbb4SfedZ4MemdyT3YTA6rHQIP6PtMkvD_NGwO8HWCHM5Epo13a-SH0wnOmIUN2vjgvJh3ok_hL2NWsUKURAxjtVIVISig3UAvx2ZXQOWAghm17qjSaaNY-SrdNO0gOyJ6D9T3cRVOqrr1eqB5OxEF9iAOldWlWeEuGAAP9JgrEVd_EJzC2Z0Ok-q2iJRvEKDGOvHtUqe_N-AkCyOwSDxsQJCmVvGc7IcasSiRNH-ncinttWegTk3cuRq7ArrdK_zBjokF8loXbIuB1xouOWQyWgUFE2rMl9FThIGISQQ.jpg?r=73d",
	},
	{
		id: 4,
		movieName: "STranger Things",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc_QuOdHzJa9WwBiBlfEvpcFRKq9TAIgdJv0KoSilQZ8JMEsdCdQS4VGD6gwVg2CYCYNhTJIald5uVsXbMf-3QaF1k1fnFRbovQr6ddWUtkSOUzil_dtlD1wOIeD_pSI6pAx.jpg?r=c68",
	},
	{
		id: 5,
		movieName: "Do Patti",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT_-XjpmZ-8n1cjK4NKNm1KRazY0_g8M6K-dx2lXCylcCOhr2pQdlnN7qewAKCpO4y0J70KAR_egu7gWaUIe8yXTjY8yHk96rKA-dbVg150oJEGU4JLejj82TmB2Pzo3wO5k.jpg?r=b01",
	},
	{
		id: 1,
		movieName: "SQUID GAME",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcK4G8grIUGuYzhNoqEkWzQ71VGTpXq3cJwkAC3pcrKrzrVmzKz2n7iEzmexOz6iF2ZuHpN0OwvEIZwt6KX_cFyTc15c1ZVlTqAQGXHGk9zg0AXMPXhuUqo8v-s1Icj6dDjn_1yWkeyufk_K4X-i_1K9xM8M1NPFCCIlhZdtZH9WitTjPi1XjnahSj7gqA9yDD4eucnrf6zAwIQ71W2wSKpy91XBK-QlfHToOy_c3T0UssjLqSHuiGE7-giOm4BNg0WN3EYm-tUbMLEjfs57nyVx7OnLZQ-M8zLSzWP5O-YiV2puQAPNT0aSj93S9cvbX9Zoos7mqRNw7ew1maEIacGvDqgmZVPDA_HiikIf4rs7bQ.jpg?r=ea2",
	},
	{
		id: 2,
		movieName: "Money Heist",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326",
	},
	{
		id: 3,
		movieName: "misMatched",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS0odT1XnaAzSLRCSC4cqkP9lppCZXXAr3sqwJ-nz84Eg-EuBj-_KEGTFLdLrj9wb0qmrQbb4SfedZ4MemdyT3YTA6rHQIP6PtMkvD_NGwO8HWCHM5Epo13a-SH0wnOmIUN2vjgvJh3ok_hL2NWsUKURAxjtVIVISig3UAvx2ZXQOWAghm17qjSaaNY-SrdNO0gOyJ6D9T3cRVOqrr1eqB5OxEF9iAOldWlWeEuGAAP9JgrEVd_EJzC2Z0Ok-q2iJRvEKDGOvHtUqe_N-AkCyOwSDxsQJCmVvGc7IcasSiRNH-ncinttWegTk3cuRq7ArrdK_zBjokF8loXbIuB1xouOWQyWgUFE2rMl9FThIGISQQ.jpg?r=73d",
	},
	{
		id: 4,
		movieName: "STranger Things",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc_QuOdHzJa9WwBiBlfEvpcFRKq9TAIgdJv0KoSilQZ8JMEsdCdQS4VGD6gwVg2CYCYNhTJIald5uVsXbMf-3QaF1k1fnFRbovQr6ddWUtkSOUzil_dtlD1wOIeD_pSI6pAx.jpg?r=c68",
	},
	{
		id: 5,
		movieName: "Do Patti",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT_-XjpmZ-8n1cjK4NKNm1KRazY0_g8M6K-dx2lXCylcCOhr2pQdlnN7qewAKCpO4y0J70KAR_egu7gWaUIe8yXTjY8yHk96rKA-dbVg150oJEGU4JLejj82TmB2Pzo3wO5k.jpg?r=b01",
	},
	{
		id: 1,
		movieName: "SQUID GAME",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcK4G8grIUGuYzhNoqEkWzQ71VGTpXq3cJwkAC3pcrKrzrVmzKz2n7iEzmexOz6iF2ZuHpN0OwvEIZwt6KX_cFyTc15c1ZVlTqAQGXHGk9zg0AXMPXhuUqo8v-s1Icj6dDjn_1yWkeyufk_K4X-i_1K9xM8M1NPFCCIlhZdtZH9WitTjPi1XjnahSj7gqA9yDD4eucnrf6zAwIQ71W2wSKpy91XBK-QlfHToOy_c3T0UssjLqSHuiGE7-giOm4BNg0WN3EYm-tUbMLEjfs57nyVx7OnLZQ-M8zLSzWP5O-YiV2puQAPNT0aSj93S9cvbX9Zoos7mqRNw7ew1maEIacGvDqgmZVPDA_HiikIf4rs7bQ.jpg?r=ea2",
	},
	{
		id: 2,
		movieName: "Money Heist",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326",
	},
	{
		id: 3,
		movieName: "misMatched",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS0odT1XnaAzSLRCSC4cqkP9lppCZXXAr3sqwJ-nz84Eg-EuBj-_KEGTFLdLrj9wb0qmrQbb4SfedZ4MemdyT3YTA6rHQIP6PtMkvD_NGwO8HWCHM5Epo13a-SH0wnOmIUN2vjgvJh3ok_hL2NWsUKURAxjtVIVISig3UAvx2ZXQOWAghm17qjSaaNY-SrdNO0gOyJ6D9T3cRVOqrr1eqB5OxEF9iAOldWlWeEuGAAP9JgrEVd_EJzC2Z0Ok-q2iJRvEKDGOvHtUqe_N-AkCyOwSDxsQJCmVvGc7IcasSiRNH-ncinttWegTk3cuRq7ArrdK_zBjokF8loXbIuB1xouOWQyWgUFE2rMl9FThIGISQQ.jpg?r=73d",
	},
	{
		id: 4,
		movieName: "STranger Things",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc_QuOdHzJa9WwBiBlfEvpcFRKq9TAIgdJv0KoSilQZ8JMEsdCdQS4VGD6gwVg2CYCYNhTJIald5uVsXbMf-3QaF1k1fnFRbovQr6ddWUtkSOUzil_dtlD1wOIeD_pSI6pAx.jpg?r=c68",
	},
	{
		id: 5,
		movieName: "Do Patti",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT_-XjpmZ-8n1cjK4NKNm1KRazY0_g8M6K-dx2lXCylcCOhr2pQdlnN7qewAKCpO4y0J70KAR_egu7gWaUIe8yXTjY8yHk96rKA-dbVg150oJEGU4JLejj82TmB2Pzo3wO5k.jpg?r=b01",
	},
	{
		id: 1,
		movieName: "SQUID GAME",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcK4G8grIUGuYzhNoqEkWzQ71VGTpXq3cJwkAC3pcrKrzrVmzKz2n7iEzmexOz6iF2ZuHpN0OwvEIZwt6KX_cFyTc15c1ZVlTqAQGXHGk9zg0AXMPXhuUqo8v-s1Icj6dDjn_1yWkeyufk_K4X-i_1K9xM8M1NPFCCIlhZdtZH9WitTjPi1XjnahSj7gqA9yDD4eucnrf6zAwIQ71W2wSKpy91XBK-QlfHToOy_c3T0UssjLqSHuiGE7-giOm4BNg0WN3EYm-tUbMLEjfs57nyVx7OnLZQ-M8zLSzWP5O-YiV2puQAPNT0aSj93S9cvbX9Zoos7mqRNw7ew1maEIacGvDqgmZVPDA_HiikIf4rs7bQ.jpg?r=ea2",
	},
	{
		id: 2,
		movieName: "Money Heist",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326",
	},
	{
		id: 3,
		movieName: "misMatched",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS0odT1XnaAzSLRCSC4cqkP9lppCZXXAr3sqwJ-nz84Eg-EuBj-_KEGTFLdLrj9wb0qmrQbb4SfedZ4MemdyT3YTA6rHQIP6PtMkvD_NGwO8HWCHM5Epo13a-SH0wnOmIUN2vjgvJh3ok_hL2NWsUKURAxjtVIVISig3UAvx2ZXQOWAghm17qjSaaNY-SrdNO0gOyJ6D9T3cRVOqrr1eqB5OxEF9iAOldWlWeEuGAAP9JgrEVd_EJzC2Z0Ok-q2iJRvEKDGOvHtUqe_N-AkCyOwSDxsQJCmVvGc7IcasSiRNH-ncinttWegTk3cuRq7ArrdK_zBjokF8loXbIuB1xouOWQyWgUFE2rMl9FThIGISQQ.jpg?r=73d",
	},
	{
		id: 4,
		movieName: "STranger Things",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc_QuOdHzJa9WwBiBlfEvpcFRKq9TAIgdJv0KoSilQZ8JMEsdCdQS4VGD6gwVg2CYCYNhTJIald5uVsXbMf-3QaF1k1fnFRbovQr6ddWUtkSOUzil_dtlD1wOIeD_pSI6pAx.jpg?r=c68",
	},
	{
		id: 5,
		movieName: "Do Patti",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT_-XjpmZ-8n1cjK4NKNm1KRazY0_g8M6K-dx2lXCylcCOhr2pQdlnN7qewAKCpO4y0J70KAR_egu7gWaUIe8yXTjY8yHk96rKA-dbVg150oJEGU4JLejj82TmB2Pzo3wO5k.jpg?r=b01",
	},
	{
		id: 1,
		movieName: "SQUID GAME",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcK4G8grIUGuYzhNoqEkWzQ71VGTpXq3cJwkAC3pcrKrzrVmzKz2n7iEzmexOz6iF2ZuHpN0OwvEIZwt6KX_cFyTc15c1ZVlTqAQGXHGk9zg0AXMPXhuUqo8v-s1Icj6dDjn_1yWkeyufk_K4X-i_1K9xM8M1NPFCCIlhZdtZH9WitTjPi1XjnahSj7gqA9yDD4eucnrf6zAwIQ71W2wSKpy91XBK-QlfHToOy_c3T0UssjLqSHuiGE7-giOm4BNg0WN3EYm-tUbMLEjfs57nyVx7OnLZQ-M8zLSzWP5O-YiV2puQAPNT0aSj93S9cvbX9Zoos7mqRNw7ew1maEIacGvDqgmZVPDA_HiikIf4rs7bQ.jpg?r=ea2",
	},
	{
		id: 2,
		movieName: "Money Heist",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326",
	},
	{
		id: 3,
		movieName: "misMatched",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS0odT1XnaAzSLRCSC4cqkP9lppCZXXAr3sqwJ-nz84Eg-EuBj-_KEGTFLdLrj9wb0qmrQbb4SfedZ4MemdyT3YTA6rHQIP6PtMkvD_NGwO8HWCHM5Epo13a-SH0wnOmIUN2vjgvJh3ok_hL2NWsUKURAxjtVIVISig3UAvx2ZXQOWAghm17qjSaaNY-SrdNO0gOyJ6D9T3cRVOqrr1eqB5OxEF9iAOldWlWeEuGAAP9JgrEVd_EJzC2Z0Ok-q2iJRvEKDGOvHtUqe_N-AkCyOwSDxsQJCmVvGc7IcasSiRNH-ncinttWegTk3cuRq7ArrdK_zBjokF8loXbIuB1xouOWQyWgUFE2rMl9FThIGISQQ.jpg?r=73d",
	},
	{
		id: 4,
		movieName: "STranger Things",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc_QuOdHzJa9WwBiBlfEvpcFRKq9TAIgdJv0KoSilQZ8JMEsdCdQS4VGD6gwVg2CYCYNhTJIald5uVsXbMf-3QaF1k1fnFRbovQr6ddWUtkSOUzil_dtlD1wOIeD_pSI6pAx.jpg?r=c68",
	},
	{
		id: 5,
		movieName: "Do Patti",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT_-XjpmZ-8n1cjK4NKNm1KRazY0_g8M6K-dx2lXCylcCOhr2pQdlnN7qewAKCpO4y0J70KAR_egu7gWaUIe8yXTjY8yHk96rKA-dbVg150oJEGU4JLejj82TmB2Pzo3wO5k.jpg?r=b01",
	},
	{
		id: 1,
		movieName: "SQUID GAME",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcK4G8grIUGuYzhNoqEkWzQ71VGTpXq3cJwkAC3pcrKrzrVmzKz2n7iEzmexOz6iF2ZuHpN0OwvEIZwt6KX_cFyTc15c1ZVlTqAQGXHGk9zg0AXMPXhuUqo8v-s1Icj6dDjn_1yWkeyufk_K4X-i_1K9xM8M1NPFCCIlhZdtZH9WitTjPi1XjnahSj7gqA9yDD4eucnrf6zAwIQ71W2wSKpy91XBK-QlfHToOy_c3T0UssjLqSHuiGE7-giOm4BNg0WN3EYm-tUbMLEjfs57nyVx7OnLZQ-M8zLSzWP5O-YiV2puQAPNT0aSj93S9cvbX9Zoos7mqRNw7ew1maEIacGvDqgmZVPDA_HiikIf4rs7bQ.jpg?r=ea2",
	},
	{
		id: 2,
		movieName: "Money Heist",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326",
	},
	{
		id: 3,
		movieName: "misMatched",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS0odT1XnaAzSLRCSC4cqkP9lppCZXXAr3sqwJ-nz84Eg-EuBj-_KEGTFLdLrj9wb0qmrQbb4SfedZ4MemdyT3YTA6rHQIP6PtMkvD_NGwO8HWCHM5Epo13a-SH0wnOmIUN2vjgvJh3ok_hL2NWsUKURAxjtVIVISig3UAvx2ZXQOWAghm17qjSaaNY-SrdNO0gOyJ6D9T3cRVOqrr1eqB5OxEF9iAOldWlWeEuGAAP9JgrEVd_EJzC2Z0Ok-q2iJRvEKDGOvHtUqe_N-AkCyOwSDxsQJCmVvGc7IcasSiRNH-ncinttWegTk3cuRq7ArrdK_zBjokF8loXbIuB1xouOWQyWgUFE2rMl9FThIGISQQ.jpg?r=73d",
	},
	{
		id: 4,
		movieName: "STranger Things",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc_QuOdHzJa9WwBiBlfEvpcFRKq9TAIgdJv0KoSilQZ8JMEsdCdQS4VGD6gwVg2CYCYNhTJIald5uVsXbMf-3QaF1k1fnFRbovQr6ddWUtkSOUzil_dtlD1wOIeD_pSI6pAx.jpg?r=c68",
	},
	{
		id: 5,
		movieName: "Do Patti",
		imageURL:
			"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT_-XjpmZ-8n1cjK4NKNm1KRazY0_g8M6K-dx2lXCylcCOhr2pQdlnN7qewAKCpO4y0J70KAR_egu7gWaUIe8yXTjY8yHk96rKA-dbVg150oJEGU4JLejj82TmB2Pzo3wO5k.jpg?r=b01",
	},
]
const mainDiv= document.getElementById('box')
function displayData ()
{
    movies.forEach((val) =>
    {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie')
        const movieImage = document.createElement('img');//<img>
        movieImage.src = val.imageURL//<img src="">
        movieImage.alt= val.movieName//<img src="" alt="">
        const movietitle = document.createElement('h2');//<h2></h2>
        movietitle.textContent = val.movieName;
        movieDiv.append(movieImage, movietitle);
        mainDiv.appendChild(movieDiv)
    })   
}
displayData()
