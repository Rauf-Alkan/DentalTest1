const whatsappUrl = "https://wa.me/905455555050?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white py-28 md:py-36"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="flex flex-col">
          <div className="mb-10 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">İletişim</p>
            <div className="space-y-4">
              <h2 className="font-heading text-3xl tracking-tight text-slate-900">Kızılay&apos;daki kliniğimizi ziyaret edin</h2>
              <span className="accent-line" />
            </div>
            <p className="text-base text-slate-600">
              Telefon, WhatsApp veya konumumuz üzerinden bize kolayca ulaşabilirsiniz. Hafta içi 09:00–20:00 arası hızlı
              dönüş yapıyoruz.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Adres</h3>
              <p className="whitespace-pre-line text-slate-600">
                Atatürk Bulvarı, No: 123, Kat: 4, Daire: 10{'\n'}Kızılay, Çankaya/Ankara, 06420
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Telefon</h3>
              <p className="whitespace-pre-line text-slate-600">
                +90 555 555 55 55{'\n'}+90 850 850 00 00
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Email</h3>
              <p className="whitespace-pre-line text-slate-600">
                info@raufalkandis.com{'\n'}randevu@raufalkandis.com
              </p>
            </div>
          </div>

          <iframe
            title="Rauf Alkan Diş Kliniği Konum"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.452211571933!2d32.852980676336005!3d39.920915483507386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f836b4cd7b7%3A0xbc8a761c0a0ce873!2sAtat%C3%BCrk%20Bulvar%C4%B1%2C%20K%C4%B1z%C4%B1lay%2C%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1714944912345!5m2!1str!2str"
            className="mt-8 h-64 w-full rounded-3xl shadow-[0_30px_70px_rgba(15,23,42,0.12)] md:h-80 lg:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            frameBorder="0"
          />
        </div>

        <div className="rounded-[28px] border border-slate-100 bg-white/90 p-8 shadow-[0_35px_90px_rgba(15,23,42,0.12)]">
          <h3 className="font-heading text-3xl tracking-tight text-slate-900">Randevu Alın</h3>
          <p className="mt-3 text-base text-slate-600">
            Uzman ekibimiz randevu talebinizi dakikalar içinde yanıtlar. ihtiyaçlarınıza göre sizi arar ve uygun zamanı
            birlikte planlarız.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#fast-appointment"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#384B70] bg-[#384B70] px-6 py-3 text-sm font-semibold text-white transition hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7C3A3]"
            >
              Randevu Talep Formunu Aç
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#D7C3A3] px-6 py-3 text-sm font-semibold text-[#384B70] transition hover:bg-[#F8F4EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7C3A3]"
            >
              WhatsApp ile Yazın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

