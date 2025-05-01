import applicationForm from "../assets/icons/first-form.svg";
import firstMeeting from "../assets/icons/first-meeting.svg";
import mentorSelection from "../assets/icons/matching-mentor.svg";
import realMeeting from "../assets/icons/real-meeting.svg";
import account from "../assets/icons/account.svg";
import followingGraphs from "../assets/icons/following-graphs.svg";

export const MAIN_PAGE_APP_STEPS = [
  {
    id: 1,
    image: applicationForm,
    title: "1. Başvuru Formunun Doldurulması",
    summaryText: "Veliler, çocukları adına bir başvuru formu doldurur.",
    mainText:
      "Siteye gelen veli, öğrencinin adı, yaşı, sınıf düzeyi ve mevcut akademik/danışmanlık ihtiyaçlarını içeren bir formu doldurur. Bu form aynı zamanda öğrencinin yaşadığı zorluklar veya özel durumlar gibi notları da içerebilir. Bu bilgiler eşleşme sürecinin temelini oluşturur.",
  },
  {
    id: 2,
    image: firstMeeting,
    title: "2. Ücretsiz İlk Görüşme Randevusu Seçimi",
    summaryText:
      "Formu dolduran veli, uygun bir tarih ve saat aralığı seçerek ücretsiz ilk görüşme randevusu oluşturur.",
    mainText:
      "Başvuru tamamlandıktan sonra sistem, müsait gün ve saat aralıklarını gösterir. Veli, bu takvim üzerinden uygun bir zaman seçerek ilk tanışma ve ihtiyaç analizi görüşmesini planlar. Bu görüşme hem veli hem mentör için yol haritasının çizilmesini sağlar.",
  },
  {
    id: 3,
    image: mentorSelection,
    title: "3. Uygun Mentör ile Eşleştirme",
    summaryText:
      "Öğrencinin bilgilerine göre en uygun mentör sistem tarafından belirlenir.",
    mainText:
      "Sistem; öğrencinin yaşı, sınıf düzeyi, belirtilen ihtiyaçlar ve veli notlarına göre, veri tabanındaki psikologlar ve eğitim koçları arasından en uygun kişiyi otomatik olarak eşleştirir. Bu eşleşme, uzmanlık alanı ve deneyimlere göre yapılır.",
  },
  {
    id: 4,
    image: realMeeting,
    title: "4. İlk Tanışma ve Değerlendirme Görüşmesi",
    summaryText:
      "Mentör ve öğrenci/veli online veya yüz yüze ilk görüşmeyi gerçekleştirir.",
    mainText:
      "Belirlenen randevu tarihinde görüşme yapılır. Bu görüşmede mentör, öğrenciyi tanır; sınav kaygısı, ders planlaması, dikkat eksikliği gibi alanlarda değerlendirme yapar. Gerekirse mentör, devam edecek planlı görüşmeler için bir öneri sunar.",
  },
  {
    id: 5,
    image: account,
    title: "5. Öğrenci Hesabının Oluşturulması",
    summaryText: "Görüşme sonrası öğrenciye özel bir hesap açılır.",
    mainText:
      "Görüşme sonrasında sistem, öğrenci adına bir kullanıcı hesabı oluşturur. Bu hesapla öğrenci ve ailesi, sisteme giriş yaparak tüm süreçleri tek bir yerden takip edebilir: randevu takvimi, gelişim notları, mentör notları vb.",
  },
  {
    id: 6,
    image: followingGraphs,
    title: "6. Randevu ve Süreç Takibi Paneli",
    summaryText:
      "Hesap içinden öğrenci/veli, mentör görüşmelerini ve gelişim sürecini takip edebilir.",
    mainText:
      "Panel üzerinden kullanıcı; yeni randevular talep edebilir, geçmiş görüşme notlarını görebilir, hangi zamanlarda mentörlerle yeniden iletişime geçebileceğini planlayabilir. Ayrıca, sistem öğrencinin gelişim grafikleriyle ilerlemeyi hem öğrenciye hem de veliye sunar.",
  },
];

export const MAIN_PAGE_SUMMARY = {
  title: "Hayalin İçin Yanındayız",
  summaryTextp1:
    "Genç bireylerin potansiyellerini keşfetmeleri, hedeflerine güvenle ilerlemeleri ve yaşam yolculuklarında sağlam adımlar atmaları için buradayız. Alanında uzman psikologlar ve eğitim koçlarından oluşan ekibimizle, öğrencilerin akademik ve kişisel gelişim süreçlerine rehberlik ediyor; sınav stresi, motivasyon eksikliği, ders planlaması ve kariyer yönelimi gibi konularda birebir mentörlük desteği sağlıyoruz.",
  summaryTextp2:
    "Amacımız, sadece başarıya ulaşmak değil; aynı zamanda sürecin her anında bireyin kendini tanımasını, özgüven geliştirmesini ve içsel gücünü fark etmesini sağlamaktır. Bu doğrultuda, bilimsel yaklaşımları temel alan, empati odaklı ve sürdürülebilir destek programları sunuyoruz.",
  summaryTextp3:
    "Bugüne kadar yüzlerce öğrenciyle yürüttüğümüz çalışmalarla onların yaşamlarında gerçek bir fark yaratmanın gururunu yaşıyoruz. Her öğrencinin biricik olduğuna inanıyor, bu yüzden her mentörlük sürecini bireysel ihtiyaçlara göre özel olarak şekillendiriyoruz.",
  summaryTextp4:
    "Hayallerin sadece bir hedef değil, bir yolculuk olduğuna inanıyoruz. Bu yolculukta yanınızdayız.",
  backgroundImage: followingGraphs,
};
