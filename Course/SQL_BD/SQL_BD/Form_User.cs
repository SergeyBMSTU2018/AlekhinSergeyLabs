using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_User : Form
    {
        public Form_User()
        {
            InitializeComponent();
        }

        private void User_form_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Shop". При необходимости она может быть перемещена или удалена.
            this.shopTableAdapter.Fill(this.bD_Shop_4semDataSet.Shop);
        }

        private void button4_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FM = new Form_Main();
            FM.Show();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FUS = new Form_User_Shops();
            FUS.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FUP = new Form_User_Products();
            FUP.Show();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FUPa = new Form_User_Product_availability_NotUsed();
            FUPa.Show();
        }
    }
}
