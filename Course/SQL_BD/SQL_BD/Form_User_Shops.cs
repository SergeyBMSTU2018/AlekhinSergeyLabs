using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_User_Shops : Form
    {
        public Form_User_Shops()
        {
            InitializeComponent();
        }

        private void User_Form1_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Shop". При необходимости она может быть перемещена или удалена.
            this.shopTableAdapter.Fill(this.bD_Shop_4semDataSet.Shop);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FU = new Form_User();
            FU.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FM = new Form_Main();
            FM.Show();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            dataGridView1.DataSource = shop_Metro_SearchTableAdapter.GetData(textBox1.Text);
        }
    }
}
