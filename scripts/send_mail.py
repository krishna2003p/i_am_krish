import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
import sys

class MailSender:
    #Contructor of mail sender file
    def __init__(self):
        self.SMTP_SERVER = "smtp.gmail.com"
        self.SMTP_PORT = 587
        self.SENDER_EMAIL = "krishna.628145@gmail.com"
        self.APP_PASSWORD = "xmgcuzkdfccemqva"
        self.HTML_FILE_PATH = "/home/krishna/Desktop/MyProject/Web/i_am_krish/public/mail.html"
        self.RESUME_PATH = "/home/krishna/Desktop/MyProject/Web/i_am_krish/public/Krishna_Prajapati.pdf"

    #function for sending mail
    def send_mail(self,receiver_email, body, subject):
        try:
            # Create Email Message
            subject = f"Application for {subject} Position"
            msg = MIMEMultipart()
            msg["From"] = self.SENDER_EMAIL
            msg["To"] = receiver_email
            msg["Subject"] = subject
            msg.attach(MIMEText(body, "html"))

            # Attach resume
            try:
                with open(self.RESUME_PATH, "rb") as attachment:
                    part = MIMEBase('application', "octet-stream")
                    part.set_payload(attachment.read())

                encoders.encode_base64(part)

                part.add_header('Content-Disposition', f"attachment; filename=Krishna_Prajapati.pdf") # Adjust filename if needed

                msg.attach(part)
            except FileNotFoundError:
                print(f"❌ Error: Resume file not found at {self.RESUME_PATH}")
                return
            except Exception as e:
                print(f"❌ Exception in attaching resume: {e}")
    
            #code for sending email
            with smtplib.SMTP(self.SMTP_SERVER, self.SMTP_PORT) as server:
                server.starttls()  # Upgrade connection to secure
                server.login(self.SENDER_EMAIL, self.APP_PASSWORD)  # Login to Gmail
                server.sendmail(self.SENDER_EMAIL, receiver_email, msg.as_string())  # Send email
                print("✅ Email sent successfully!")
        except Exception as e:
            print(f"❌ Exception in auth_check function Error:: {e}")
    
    def read_html_content(self):
        """Reads the content of an HTML file into a string."""
        try:
            with open(self.HTML_FILE_PATH, "r", encoding="utf-8") as file:
                html_content = file.read()
            # print(f"Read HTML content (first 50 chars): {html_content[:50]}...")
            return html_content
        except FileNotFoundError:
            print(f"❌ Error: HTML file not found at {self.HTML_FILE_PATH}")
            return None
        except Exception as e:
            print(f"❌ Exception in read_html_content function: {e}")
            return None


#main function
def main():
    sendMail = MailSender()
    email_content = sendMail.read_html_content()
    subject = sys.argv[1] if len(sys.argv) > 1 else "Full Stack Developer"
    rec_email = sys.argv[2]
    company_name = sys.argv[3]
    hiring_manager_name = sys.argv[4] if len(sys.argv) > 4 else "Hiring Manager"
    dynamic_html_body = email_content.replace("[Hiring Manager]", hiring_manager_name)
    dynamic_html_body = dynamic_html_body.replace("[Company Name]", company_name)
    dynamic_html_body = dynamic_html_body.replace("[POSITION]", subject)
    sendMail.send_mail(rec_email, dynamic_html_body, subject)


if __name__ == "__main__":
    main()
