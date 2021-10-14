using System;
using System.Data;
using System.Windows.Forms;
using System.Data.SqlClient;


namespace SQL_BD
{
    public partial class Form_Main : Form
    {
        public Form_Main()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Users". При необходимости она может быть перемещена или удалена.
            this.usersTableAdapter.Fill(this.bD_Shop_4semDataSet.Users);

        }

        private void button1_Click(object sender, EventArgs e)
        {
            SqlConnection sqlConnection = new SqlConnection(@"Data Source=7E09;Initial Catalog=BD_Shop_4sem;Integrated Security=True");
            string query = "Select * from Users where Name = '" + User.Text + "' and Password = '" + Password.Text.Trim() + "'";
            SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(query, sqlConnection);
            DataTable dataTable = new DataTable();
            sqlDataAdapter.Fill(dataTable);
            if (dataTable.Rows.Count == 1)
            {
                Password.Clear();
                this.Hide();
                if (dataTable.Rows[0]["Name"].ToString().Trim() == "Admin")
                {
                    Form FA = new Form_Admin();
                    FA.Show();
                }
                if (dataTable.Rows[0]["Name"].ToString().Trim() == "User")
                {
                    Form FU = new Form_User();
                    FU.Show();
                }
                if (dataTable.Rows[0]["Name"].ToString().Trim() == "Seller")
                {
                    Form FS = new Form_Seller();
                    FS.Show();
                }
            }
            else
            {
                MessageBox.Show("Произошла ошибка! Проверьте тип пользователя и пароль.");
                Password.Clear();
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
